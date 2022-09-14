export interface ITapeMachine {
    country_of_manufacture: string;
    external_references: any[];
    title: string;
    dates_produced: string;
    channels_voices_tracks: ChannelsVoicesTrack[];
    model_number: string;
    controls: Control[];
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

export interface Control {
    range: Range;
    parameter: string;
    control_type: string;
}

export enum Range {
    Empty = "",
    OffLowHigh = "Off / Low / High",
    The24CMS12CMS = "2.4 cm/s / 1.2 cm/s",
}

export interface DisplaysIndicatorsMeter {
    type: string;
    scale: string;
    indication: string;
}
