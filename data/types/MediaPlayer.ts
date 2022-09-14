export interface IMediaPlayer {
    external_links: ExternalLink[];
    country_of_manufacture: string;
    channels_voices_tracks: any[];
    dates_produced: string;
    title: string;
    model_number: string;
    controls: any[];
    slug: string;
    connections: any[];
    displays_indicators_meters: any[];
    frequency_response: string;
    signal_path: string;
    form_factor: string;
    id: number;
    power_source: string;
    dimensions_string: string;
    manufacturers: string[];
    deviceTypes: string[];
}

export interface ExternalLink {
    url: string;
    notes: string;
}
