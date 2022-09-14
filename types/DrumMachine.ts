export interface IDrumMachine {
    external_links: ExternalLink[];
    country_of_manufacture: string;
    channels_voices_tracks: any[];
    dates_produced: string;
    title: string;
    model_number: string;
    controls: Control[];
    slug: string;
    connections: Connection[];
    displays_indicators_meters: DisplaysIndicatorsMeter[];
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
    description: string[];
    name: string;
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

export interface ExternalLink {
    url: string;
    notes: string;
}
