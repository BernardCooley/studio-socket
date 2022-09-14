export interface IDataStorage {
    country_of_manufacture: string;
    title: string;
    controls: Control[];
    slug: string;
    connections: Connection[];
    signal_path: string;
    form_factor: string;
    id: number;
    dimensions_string: string;
    manufacturers: string[];
    deviceTypes: string[];
}

export interface Connection {
    connector: string;
    name: string;
    description: any[];
}

export interface Control {
    range: string;
    parameter: string;
    control_type: string;
}
