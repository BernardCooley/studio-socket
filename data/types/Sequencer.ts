export interface ISequencer {
    country_of_manufacture: string;
    title: string;
    dates_produced: string;
    channels_voices_tracks: ChannelsVoicesTrack[];
    controls: Control[];
    slug: string;
    connections: Connection[];
    displays_indicators_meters: DisplaysIndicatorsMeter[];
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
    name: string;
    description: string[];
}

export interface Control {
    parameter: string;
    range: string;
    group?: string;
    control_type: ControlType;
}

export enum ControlType {
    MomentaryPushSwitch = "Momentary Push Switch",
    RotaryEncoderWithMomentaryPushSwitch = "Rotary Encoder with Momentary Push Switch",
    RotaryPot = "Rotary Pot",
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
