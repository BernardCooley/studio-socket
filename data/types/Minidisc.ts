export interface IMinidisc {
    external_links: ExternalLink[];
    country_of_manufacture: string;
    title: string;
    dates_produced: string;
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

export interface Connection {
    connector: string;
    description: any[];
    name: string;
}

export interface Control {
    range: Range;
    parameter: string;
    control_type: string;
}

export enum Range {
    AnalogCoaxOpt1Opt2 = "Analog / Coax / Opt1 / Opt2",
    Empty = "",
    RecOffPlay = "Rec / Off / Play",
}

export interface ExternalLink {
    url: string;
    notes: string;
}
