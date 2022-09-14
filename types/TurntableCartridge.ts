export interface ITurnTableCartridge {
    external_links: ExternalLink[];
    country_of_manufacture: string;
    title: string;
    channels_voices_tracks: ChannelsVoicesTrack[];
    model_number: string;
    controls: any[];
    slug: string;
    connections: any[];
    displays_indicators_meters: any[];
    frequency_response: string;
    signal_path: string;
    form_factor: string;
    id: number;
    manufacturers: string[];
    deviceTypes: string[];
}

export interface ChannelsVoicesTrack {
    type: string;
    additional_information: string;
    quantity: string;
}

export interface ExternalLink {
    url: string;
    notes: string;
}
