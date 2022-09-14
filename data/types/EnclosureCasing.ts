export interface IEnclosureCasing {
    country_of_manufacture: string;
    channels_voices_tracks: any[];
    title: string;
    model_number: string;
    controls: any[];
    slug: string;
    connections: any[];
    displays_indicators_meters: any[];
    signal_path: string;
    form_factor: string;
    id: number;
    power_source: string;
    dimensions_string: string;
    external_links: ExternalLink[];
    manufacturers: string[];
    deviceTypes: string[];
}

export interface ExternalLink {
    url: string;
    notes: string;
}
