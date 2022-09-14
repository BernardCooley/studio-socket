export interface IDynamics {
    country_of_manufacture: string;
    title: string;
    dates_produced: string;
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
    external_links: ExternalLink[];
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
