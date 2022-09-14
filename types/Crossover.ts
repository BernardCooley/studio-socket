export interface ICrossover {
    external_references: any[];
    country_of_manufacture: string;
    channels_voices_tracks: ChannelsVoicesTrack[];
    dates_produced: string;
    title: string;
    model_number: string;
    slug: string;
    connections: Connection[];
    displays_indicators_meters: DisplaysIndicatorsMeter[];
    frequency_response: string;
    form_factor: string;
    id: number;
    power_source: string;
    dimensions_string: string;
    signal_path: string;
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
    name: string;
    description: any[];
}

export interface DisplaysIndicatorsMeter {
    type: string;
    scale: string;
    indication: string;
}
