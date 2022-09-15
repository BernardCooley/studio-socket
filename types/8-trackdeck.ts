export type IEightTrackDeck = {
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
    TYPE: "8-track deck";
};

interface Control {
    range: string;
    parameter: string;
    control_type: string;
}

interface Dimension {
    width: number;
    depth: number;
    height: number;
}

interface DisplaysIndicatorsMeter {
    type: string;
    scale: string;
    indication: string;
}

interface ExternalLink {
    url: string;
    notes: string;
}
