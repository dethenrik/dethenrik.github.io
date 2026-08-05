import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal
} from '@angular/core';
import {
    DomSanitizer,
    SafeResourceUrl
} from '@angular/platform-browser';

type GameId =
    | 'survive-me'
    | 'get-high';

type GameOrientation =
    | 'landscape'
    | 'portrait';

interface PortfolioGame {
    id: GameId;
    number: string;
    title: string;
    category: string;
    status: string;
    description: string;
    orientation: GameOrientation;
    safeGameUrl: SafeResourceUrl;
}

@Component({
    selector: 'app-games',
    standalone: true,
    imports: [],
    templateUrl: './games.html',
    styleUrl: './games.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Games {
    private readonly sanitizer = inject(DomSanitizer);

    private readonly selectedGameId =
        signal<GameId | null>(null);

    protected readonly games: readonly PortfolioGame[] = [
        {
            id: 'survive-me',
            number: '01',
            title: 'Survive Me',
            category: '2D WAVE SURVIVAL',
            status: 'Playable Prototype',
            description:
                'Survive endless waves, collect weapons and ammunition, unlock new areas and defeat increasingly difficult enemies.',
            orientation: 'landscape',
            safeGameUrl:
                this.sanitizer.bypassSecurityTrustResourceUrl(
                    'https://survivemeversion002.netlify.app'
                )
        },
        {
            id: 'get-high',
            number: '02',
            title: 'Get High',
            category: 'MOBILE PLATFORM GAME',
            status: 'Playable Build',
            description:
                'Climb as high as possible by controlling jump height and moving between platforms with touch or mouse input.',
            orientation: 'portrait',
            safeGameUrl:
                this.sanitizer.bypassSecurityTrustResourceUrl(
                    'https://gethighnow.netlify.app'
                )
        }
    ];

    protected readonly selectedGame = computed(() => {
        const gameId = this.selectedGameId();

        if (!gameId) {
            return null;
        }

        return this.games.find(
            game => game.id === gameId
        ) ?? null;
    });

    protected openGame(gameId: GameId): void {
        this.selectedGameId.set(gameId);
    }

    protected closeGame(): void {
        this.selectedGameId.set(null);
    }
}