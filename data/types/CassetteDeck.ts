export interface ICassetteDeck {
    country_of_manufacture: string;
    title: string;
    dates_produced: string;
    channels_voices_tracks: any[];
    model_number: string;
    controls: any[];
    slug: string;
    connections: Connection[];
    displays_indicators_meters: any[];
    frequency_response: string;
    external_links: ExternalLink[];
    form_factor: string;
    id: number;
    power_source: string;
    dimensions: Dimension[];
    signal_path: string;
    manufacturers: string[];
    deviceTypes: string[];
}

export interface Connection {
    connector: string;
    description: string[];
    name: string;
}

export interface Dimension {
    width: number;
    depth: number;
    height: number;
}

export interface ExternalLink {
    url: string;
    notes: string;
}
