export interface IEightTrackDeck {
    country_of_manufacture: string;
    channels_voices_tracks: any[];
    title: string;
    controls: Control[];
    slug: string;
    displays_indicators_meters: DisplaysIndicatorsMeter[];
    signal_path: string;
    form_factor: string;
    id: number;
    power_source: string;
    dimensions: Dimension[];
    external_links: ExternalLink[];
    manufacturers: string[];
    deviceTypes: string[];
}

export interface Control {
    range: string;
    parameter: string;
    control_type: string;
}

export interface Dimension {
    width: number;
    depth: number;
    height: number;
}

export interface DisplaysIndicatorsMeter {
    type: string;
    scale: string;
    indication: string;
}

export interface ExternalLink {
    url: string;
    notes: string;
}
