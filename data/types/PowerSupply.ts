export interface IPowerSupply {
    external_links: ExternalLink[];
    country_of_manufacture: string;
    title: string;
    dates_produced: string;
    controls: Control[];
    slug: string;
    connections: any[];
    signal_path: string;
    form_factor: string;
    id: number;
    power_source: string;
    dimensions_string: string;
    manufacturers: string[];
    deviceTypes: string[];
}

export interface Control {
    range: string;
    parameter: string;
    control_type: string;
}

export interface ExternalLink {
    url: string;
    notes: string;
}
