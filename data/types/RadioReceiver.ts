export interface IRadioReceiver {
    external_links: ExternalLink[];
    country_of_manufacture: string;
    title: string;
    dates_produced: string;
    channels_voices_tracks: any[];
    model_number: string;
    controls: any[];
    slug: string;
    connections: any[];
    displays_indicators_meters: any[];
    frequency_response: string;
    form_factor: string;
    id: number;
    power_source: string;
    dimensions_string: string;
    signal_path: string;
    manufacturers: string[];
    deviceTypes: string[];
}

export interface ExternalLink {
    url: string;
    notes: string;
}
