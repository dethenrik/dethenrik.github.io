import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    signal,
    viewChild
} from '@angular/core';
import { Contactinformation } from '../contactinformation/contactinformation';
import { ExperienceEducation } from '../experience-education/experience-education';
import { Games } from '../games/games';
import { Profile } from '../profile/profile';
import { Projects } from '../projects/projects';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        Profile,
        Projects,
        ExperienceEducation,
        Games,
        Contactinformation
    ],
    templateUrl: './landing-page.html',
    styleUrl: './landing-page.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage {
    private readonly scrollContainer =
        viewChild<ElementRef<HTMLElement>>('scrollContainer');

    private scrollLocked = false;

    protected readonly activeSection = signal(0);

    protected readonly navigationItems = [
        {
            label: 'Home',
            sectionIndex: 0
        },
        {
            label: 'Projects',
            sectionIndex: 1
        },
        {
            label: 'Experience',
            sectionIndex: 2
        },
        {
            label: 'Games',
            sectionIndex: 3
        },
        {
            label: 'Contact',
            sectionIndex: 4
        }
    ] as const;

    protected readonly sectionDots = [
        {
            label: 'Home',
            sectionIndex: 0
        },
        {
            label: 'Projects',
            sectionIndex: 1
        },
        {
            label: 'Experience',
            sectionIndex: 2
        },
        {
            label: 'Games',
            sectionIndex: 3
        },
        {
            label: 'Contact',
            sectionIndex: 4
        }
    ] as const;

    protected scrollToSection(sectionIndex: number): void {
        const container = this.scrollContainer()?.nativeElement;

        if (!container) {
            return;
        }

        const sections = this.getSections(container);
        const section = sections[sectionIndex];

        if (!section) {
            return;
        }

        this.activeSection.set(sectionIndex);

        container.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }

    protected onWheel(event: WheelEvent): void {
        if (event.deltaY === 0) {
            return;
        }

        event.preventDefault();

        if (this.scrollLocked) {
            return;
        }

        const direction = event.deltaY > 0 ? 1 : -1;
        const lastSectionIndex = this.sectionDots.length - 1;

        const nextSectionIndex = Math.min(
            Math.max(
                this.activeSection() + direction,
                0
            ),
            lastSectionIndex
        );

        if (nextSectionIndex === this.activeSection()) {
            return;
        }

        this.scrollLocked = true;

        this.scrollToSection(nextSectionIndex);

        window.setTimeout(() => {
            this.scrollLocked = false;
        }, 750);
    }

    protected onScroll(): void {
        const container = this.scrollContainer()?.nativeElement;

        if (!container) {
            return;
        }

        const sections = this.getSections(container);

        let closestSectionIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        sections.forEach((section, sectionIndex) => {
            const distance = Math.abs(
                container.scrollTop - section.offsetTop
            );

            if (distance < closestDistance) {
                closestDistance = distance;
                closestSectionIndex = sectionIndex;
            }
        });

        if (closestSectionIndex !== this.activeSection()) {
            this.activeSection.set(closestSectionIndex);
        }
    }

    private getSections(container: HTMLElement): HTMLElement[] {
        return Array.from(
            container.querySelectorAll<HTMLElement>(
                '[data-scroll-section]'
            )
        );
    }
}