export interface IDAC {
    country_of_manufacture: string;
    channels_voices_tracks: ChannelsVoicesTrack[];
    title: string;
    controls: Control[];
    slug: string;
    connections: Connection[];
    displays_indicators_meters: DisplaysIndicatorsMeter[];
    frequency_response: string;
    external_links: ExternalLink[];
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
    quantity: number;
}

export interface Connection {
    connector: Connector;
    description: string[];
    name: string;
}

export enum Connector {
    BNC = "BNC",
    DSub = "D-Sub",
    The14PhoneJack635Mm = "1/4 Phone Jack (6.35mm)",
    Xlr = "XLR",
}

export interface Control {
    range: string;
    parameter: string;
    control_type: string;
}

export interface DisplaysIndicatorsMeter {
    type: Type;
    indication: string;
}

export enum Type {
    DiodeGreen = "Diode (Green)",
    DiodeRed = "Diode (Red)",
    DiodeYellow = "Diode (Yellow)",
}

export interface ExternalLink {
    url: string;
    notes: string;
}
