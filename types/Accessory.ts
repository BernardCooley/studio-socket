export interface IAccessory {
    country_of_manufacture: string;
    title: string;
    channels_voices_tracks: ChannelsVoicesTrack[];
    model_number: string;
    controls: Control[];
    slug: string;
    connections: Connection[];
    displays_indicators_meters: any[];
    frequency_response: string;
    external_links: ExternalLink[];
    form_factor: string;
    id: number;
    power_source: string;
    signal_path: string;
    dimensions: Dimension[];
    manufacturers: string[];
    deviceTypes: string[];
}

export interface ChannelsVoicesTrack {
    type: string;
    quantity: number;
}

export interface Connection {
    connector: string;
    description: Description[];
    name: string;
}

export enum Description {
    Balanced = "Balanced",
    SocketFemale = "Socket (Female)",
    Stereo = "Stereo",
    Unbalanced = "Unbalanced",
}

export interface Control {
    range?: string;
    parameter: string;
    control_type: string;
}

export interface Dimension {
    width: number;
    depth: number;
    notes: string;
    height: number;
}

export interface ExternalLink {
    url: string;
    notes: string;
}
