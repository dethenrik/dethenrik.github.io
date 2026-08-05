import {
    ChangeDetectionStrategy,
    Component,
    computed,
    signal
} from '@angular/core';

@Component({
    selector: 'app-experience-education',
    imports: [],
    templateUrl: './experience-education.html',
    styleUrl: './experience-education.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(document:keydown.escape)': 'closeDocumentOverlay()'
    }
})
export class ExperienceEducation {
    protected readonly documents = [
        {
            title: 'Diploma',
            imagePath: '/Skolebevis.png',
            imageAlt: 'Martin Almand Berthelsen diploma from TEC'
        },
        {
            title: 'Certificates',
            imagePath: '/Certifikater.png',
            imageAlt: 'Martin Almand Berthelsen certificates from TEC'
        }
    ] as const;

    protected readonly activeDocumentIndex =
        signal<number | null>(null);

    protected readonly activeDocument = computed(() => {
        const documentIndex = this.activeDocumentIndex();

        if (documentIndex === null) {
            return null;
        }

        return this.documents[documentIndex] ?? null;
    });

    protected openDocumentOverlay(
        documentIndex: number = 0
    ): void {
        if (!this.documents[documentIndex]) {
            return;
        }

        this.activeDocumentIndex.set(documentIndex);
    }

    protected selectDocument(documentIndex: number): void {
        if (!this.documents[documentIndex]) {
            return;
        }

        this.activeDocumentIndex.set(documentIndex);
    }

    protected closeDocumentOverlay(): void {
        this.activeDocumentIndex.set(null);
    }
}