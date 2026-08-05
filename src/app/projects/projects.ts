import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    computed,
    signal
} from '@angular/core';

type ProjectId =
    | 'final-examination'
    | 'not-alone'
    | 'survive-me'
    | 'get-high';

type ProjectStatusTone =
    | 'completed'
    | 'development'
    | 'prototype'
    | 'playable';

type ProjectGroupId =
    | 'completed-and-playable'
    | 'in-development';

type ProjectGroupClass =
    | 'completed-column'
    | 'development-column';

interface PortfolioProject {
    id: ProjectId;
    number: string;
    title: string;
    category: string;
    status: string;
    statusTone: ProjectStatusTone;
    dateLabel: string;
    shortDescription: string;
    overview: string;
    primarySectionTitle: string;
    primaryHighlights: readonly string[];
    secondarySectionTitle: string;
    secondaryHighlights: readonly string[];
    limitations: readonly string[];
    technologies: readonly string[];
    projectNote: string | null;
    videoPath: string | null;
}

interface ProjectGroup {
    id: ProjectGroupId;
    title: string;
    className: ProjectGroupClass;
    projects: readonly PortfolioProject[];
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [],
    templateUrl: './projects.html',
    styleUrl: './projects.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Projects {
    protected readonly projects: readonly PortfolioProject[] = [
        {
            id: 'final-examination',
            number: '01',
            title: 'Final Examination Project',
            category: 'WEB PLATFORM & GAME INTEGRATION',
            status: 'Completed',
            statusTone: 'completed',
            dateLabel: '2026',
            shortDescription:
                'A game portal connecting an Angular website, Firebase data and Unity WebGL games.',
            overview:
                'My final examination project was a complete game portal where users could access browser-based games, manage their profile and compete through a shared high-score system.',
            primarySectionTitle: 'Platform',
            primaryHighlights: [
                'Game portal developed as a complete web platform',
                'User accounts and player profile functionality',
                'Game overview with access to browser-based games',
                'High-score display connected to player data',
                'Structured Angular component architecture'
            ],
            secondarySectionTitle: 'Technical Integration',
            secondaryHighlights: [
                'Angular and TypeScript frontend',
                'Firebase Realtime Database integration',
                'Unity WebGL game integration',
                'Games hosted separately through Netlify',
                'Communication between games and the high-score system'
            ],
            limitations: [],
            technologies: [
                'Angular',
                'TypeScript',
                'Firebase',
                'Unity WebGL',
                'Netlify'
            ],
            projectNote: null,
            videoPath: null
        },
        {
            id: 'not-alone',
            number: '02',
            title: 'Not Alone',
            category: '3D TOP-DOWN ARPG',
            status: 'In Development',
            statusTone: 'development',
            dateLabel: 'Started February 2, 2025',
            shortDescription:
                'A dark 3D action RPG focused on survival, exploration, loot and character progression.',
            overview:
                'Not Alone follows a man from the modern world who becomes trapped in a hostile medieval dimension. The player must survive, help the local population and find a way home while fighting monsters and demons.',
            primarySectionTitle: 'Current Implementation',
            primaryHighlights: [
                'Functional inventory with draggable 3D world items',
                'Item pickup and weapon equipment systems',
                'Weapons with individual audio, muzzle effects and hand positions',
                'Third-person controller, camera and player animations',
                'Enemy hit reactions and surface impact effects',
                'World-space interface for health, level, weapons and grenades',
                'Incendiary, EMP, poison and fragmentation grenades',
                'Live weapon modifier panel for equipped attachments'
            ],
            secondarySectionTitle: 'Planned Development',
            secondaryHighlights: [
                'Large areas with swamps, ruins, villages and castles',
                'Safe houses, storage and fast travel',
                'Missions and dynamic NPC interactions',
                'Skill presets with four active skills',
                'Tiered weapons, attachments and loot progression',
                'Expanded enemy audio and reaction systems',
                'Boss encounters and unique grenade rewards',
                'Multiplayer support through Epic Online Services'
            ],
            limitations: [],
            technologies: [
                'Unity',
                'C#',
                '3D',
                'URP',
                'Game AI',
                'Inventory Systems'
            ],
            projectNote: null,
            videoPath: '/NotAloneShowcase.mp4'
        },
        {
            id: 'survive-me',
            number: '03',
            title: 'Survive Me',
            category: '2D WAVE SURVIVAL',
            status: 'Playable Prototype',
            statusTone: 'prototype',
            dateLabel: 'Built in 2–3 months',
            shortDescription:
                'An endless wave-based survival game with zombies, weapons, upgrades, dungeons and bosses.',
            overview:
                'Survive Me is a 2D survival game where the player begins inside an enclosed area and fights increasingly difficult waves of zombies. Enemies drop currency, weapons and ammunition that allow the player to unlock new areas and continue progressing.',
            primarySectionTitle: 'Core Gameplay',
            primaryHighlights: [
                'Endless wave-based survival gameplay',
                'Zombies drop currency, weapons and ammunition',
                'More than 20 weapons with attachments',
                'Assault rifles, handguns, shotguns and additional weapon types',
                'Doors and areas unlocked through progression',
                'No fixed wave or simultaneous enemy limit',
                'High-score-focused gameplay loop'
            ],
            secondarySectionTitle: 'Progression & World',
            secondaryHighlights: [
                'Temple containing a character upgrade system',
                'Skills purchased with currency earned from enemies',
                'Dungeon containing multiple monster types',
                'Keys that unlock increasingly difficult rooms',
                'Boss encounters with valuable late-game loot',
                'Live map showing the complete game world',
                'Fog of war removed as new areas are discovered'
            ],
            limitations: [
                'The high-score system no longer works because the build is no longer connected to Firebase',
                'The game does not contain a save system',
                'The original repository and project files were accidentally deleted',
                'The existing Unity WebGL build is the latest and only remaining version',
                'The game uses modified free assets, which can create some visual inconsistencies'
            ],
            technologies: [
                'Unity',
                'Unity WebGL',
                'Firebase',
                '2D Game Development',
                'Wave Systems',
                'Fog of War'
            ],
            projectNote:
                'Survive Me is preserved as a playable prototype. The original Unity project and repository are no longer available, so further development of this version is not possible.',
            videoPath: null
        },
        {
            id: 'get-high',
            number: '04',
            title: 'Get High',
            category: 'MOBILE PLATFORM GAME',
            status: 'Playable Build',
            statusTone: 'playable',
            dateLabel: 'Mobile & Desktop',
            shortDescription:
                'A mobile-first platform game where the goal is to climb as high as possible.',
            overview:
                'Get High is a mobile-first platform game where the player attempts to climb as high as possible by jumping from platform to platform. The game can also be played on a computer using a mouse.',
            primarySectionTitle: 'Core Gameplay',
            primaryHighlights: [
                'Jump from platform to platform',
                'Climb as high as possible',
                'Hold the input longer to jump higher',
                'Control horizontal movement while holding the input',
                'Move left or right by moving the finger or mouse horizontally',
                'Vertical finger or mouse movement does not control the character'
            ],
            secondarySectionTitle: 'Platform & Controls',
            secondaryHighlights: [
                'Designed primarily for mobile devices',
                'Playable on a computer using a mouse',
                'Built for the same game portal as Survive Me',
                'Built for the same shared high-score setup as Survive Me',
                'Hosted as a playable browser build through Netlify'
            ],
            limitations: [
                'The original project files are no longer available',
                'The original repository is no longer available'
            ],
            technologies: [
                'Mobile-first Game',
                'Browser Game',
                'Pointer Controls',
                'High-score Integration',
                'Netlify'
            ],
            projectNote:
                'Get High remains available as a playable hosted build, but the original project files and repository are no longer available.',
            videoPath: null
        }
    ];

    protected readonly projectGroups: readonly ProjectGroup[] = [
        {
            id: 'completed-and-playable',
            title: 'COMPLETED & PLAYABLE',
            className: 'completed-column',
            projects: this.projects.filter(
                project => project.statusTone !== 'development'
            )
        },
        {
            id: 'in-development',
            title: 'IN DEVELOPMENT',
            className: 'development-column',
            projects: this.projects.filter(
                project => project.statusTone === 'development'
            )
        }
    ];

    private readonly selectedProjectId =
        signal<ProjectId | null>(null);

    protected readonly selectedProject = computed(() => {
        const projectId = this.selectedProjectId();

        if (!projectId) {
            return null;
        }

        return this.projects.find(
            project => project.id === projectId
        ) ?? null;
    });

    protected openProject(projectId: ProjectId): void {
        this.selectedProjectId.set(projectId);
    }

    protected closeProject(): void {
        this.selectedProjectId.set(null);
    }

    @HostListener('document:keydown.escape')
    protected closeProjectWithEscape(): void {
        if (this.selectedProjectId()) {
            this.closeProject();
        }
    }
}