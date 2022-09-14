export interface IRadioTuner {
    country_of_manufacture: string;
    title: string;
    dates_produced: string;
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

export interface Connection {
    connector: string;
    name: string;
}

export interface Control {
    range: string;
    parameter: string;
    control_type: string;
}
