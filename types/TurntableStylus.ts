export interface ITurntableStylus {
    external_links: ExternalLink[];
    country_of_manufacture: string;
    channels_voices_tracks: any[];
    title: string;
    model_number: string;
    slug: string;
    connections: any[];
    frequency_response: string;
    signal_path: string;
    form_factor: string;
    id: number;
    manufacturers: string[];
    deviceTypes: string[];
}

export interface ExternalLink {
    url: string;
    notes: string;
}
