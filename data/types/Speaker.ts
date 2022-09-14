export interface ISpeaker {
    country_of_manufacture: string;
    channels_voices_tracks: ChannelsVoicesTrack[];
    dates_produced: string;
    title: string;
    controls: any[];
    slug: string;
    connections: Connection[];
    displays_indicators_meters: DisplaysIndicatorsMeter[];
    frequency_response: string;
    signal_path: string;
    form_factor: string;
    id: number;
    power_source: string;
    dimensions_string: string;
    external_links: ExternalLink[];
    manufacturers: string[];
    deviceTypes: string[];
}

export interface ChannelsVoicesTrack {
    type: string;
    additional_information: string;
    quantity: string;
}

export interface Connection {
    connector: string;
    description: any[];
    name: string;
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
