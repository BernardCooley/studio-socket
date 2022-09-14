export interface IEQ {
    country_of_manufacture: string;
    title: string;
    dates_produced: string;
    model_number: string;
    controls: any[];
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

export interface Connection {
    connector: string;
    description: any[];
    name: string;
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
