export interface ISampler {
    external_links: ExternalLink[];
    country_of_manufacture: string;
    title: string;
    dates_produced: string;
    channels_voices_tracks: ChannelsVoicesTrack[];
    model_number: string;
    controls: Control[];
    slug: string;
    connections: Connection[];
    displays_indicators_meters: DisplaysIndicatorsMeter[];
    frequency_response: string;
    signal_path: string;
    form_factor: string;
    id: number;
    power_source: string;
    dimensions_string: string;
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
    description: string[];
    name: string;
}

export interface Control {
    range: string;
    parameter: string;
    control_type: string;
}

export interface DisplaysIndicatorsMeter {
    indication: string;
    scale: string;
    type: string;
}

export interface ExternalLink {
    url: string;
    notes: string;
}
