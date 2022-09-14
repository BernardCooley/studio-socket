export interface IMicrophone {
    country_of_manufacture: string;
    title: string;
    dates_produced: string;
    channels_voices_tracks: ChannelsVoicesTrack[];
    model_number: string;
    controls: Control[];
    slug: string;
    connections: Connection[];
    displays_indicators_meters: any[];
    frequency_response: string;
    external_links: any[];
    form_factor: string;
    id: number;
    power_source: string;
    signal_path: string;
    dimensions_string: string;
    manufacturers: string[];
    deviceTypes: string[];
}

export interface ChannelsVoicesTrack {
    type: string;
    quantity: number;
}

export interface Connection {
    connector: string;
    description: any[];
    name: string;
}

export interface Control {
    parameter: string;
    control_type: string;
}
