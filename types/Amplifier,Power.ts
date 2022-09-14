export interface IAmplifierPower {
    external_links: any[];
    country_of_manufacture: string;
    channels_voices_tracks: ChannelsVoicesTrack[];
    dates_produced: string;
    title: string;
    model_number: string;
    controls: Control[];
    slug: string;
    connections: Connection[];
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

export interface ChannelsVoicesTrack {
    type: string;
    additional_information: string;
    quantity: string;
}

export interface Connection {
    connector: string;
    description: Description[];
    name: string;
}

export enum Description {
    SocketFemale = "Socket (Female)",
    Stereo = "Stereo",
}

export interface Control {
    range: string;
    parameter: string;
    control_type: ControlType;
}

export enum ControlType {
    RotaryPot = "Rotary Pot",
    RotaryPotWithSwitch = "Rotary Pot with Switch",
    RotarySwitch = "Rotary Switch",
    ToggleSwitch = "Toggle Switch",
}
