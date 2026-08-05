import {
    ChangeDetectionStrategy,
    Component,
    output
} from '@angular/core';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.html',
    styleUrl: './profile.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Profile {
    readonly pageRequested = output<number>();

    protected readonly technologies = [
        {
            name: 'C#',
            icon: 'C#',
            iconClass: 'csharp-icon'
        },
        {
            name: 'UNITY',
            icon: '◆',
            iconClass: 'unity-icon'
        },
        {
            name: 'TYPESCRIPT',
            icon: 'TS',
            iconClass: 'typescript-icon'
        }
    ] as const;

    protected openProjects(): void {
        this.pageRequested.emit(1);
    }
}