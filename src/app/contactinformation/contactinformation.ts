import {
    Component,
    computed,
    signal
} from '@angular/core';

@Component({
    selector: 'app-contactinformation',
    imports: [],
    templateUrl: './contactinformation.html',
    styleUrl: './contactinformation.css'
})
export class Contactinformation {
    protected readonly emailAddress =
        'Almand1999@hotmail.com';

    protected readonly emailCopyState =
        signal<'idle' | 'copied' | 'failed'>('idle');

    protected readonly emailCopyLabel = computed(() => {
        const copyState = this.emailCopyState();

        if (copyState === 'copied') {
            return 'COPIED';
        }

        if (copyState === 'failed') {
            return 'FAILED';
        }

        return 'COPY';
    });

    protected readonly emailCopySymbol = computed(() => {
        const copyState = this.emailCopyState();

        if (copyState === 'copied') {
            return '✓';
        }

        if (copyState === 'failed') {
            return '!';
        }

        return '⧉';
    });

    private emailCopyResetTimer: number | null = null;

    protected async copyEmail(): Promise<void> {
        if (!navigator.clipboard) {
            this.setTemporaryEmailCopyState('failed');
            return;
        }

        try {
            await navigator.clipboard.writeText(
                this.emailAddress
            );

            this.setTemporaryEmailCopyState('copied');
        } catch {
            this.setTemporaryEmailCopyState('failed');
        }
    }

    private setTemporaryEmailCopyState(
        copyState: 'copied' | 'failed'
    ): void {
        this.emailCopyState.set(copyState);

        if (this.emailCopyResetTimer !== null) {
            window.clearTimeout(
                this.emailCopyResetTimer
            );
        }

        this.emailCopyResetTimer =
            window.setTimeout(() => {
                this.emailCopyState.set('idle');
                this.emailCopyResetTimer = null;
            }, 1800);
    }
}