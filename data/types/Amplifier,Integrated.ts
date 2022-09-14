export interface IAmplifierIntegrated {
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
    control_type: string;
}
