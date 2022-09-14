export interface IClockGenerator {
    external_references: any[];
    country_of_manufacture: string;
    title: string;
    dates_produced: string;
    controls: Control[];
    slug: string;
    connections: Connection[];
    displays_indicators_meters: DisplaysIndicatorsMeter[];
    signal_path: string;
    form_factor: string;
    id: number;
    power_source: string;
    dimensions_string: string;
    manufacturers: string[];
    deviceTypes: string[];
}

export interface Connection {
    connector: string;
    name: string;
    description: string[];
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
