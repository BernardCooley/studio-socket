export interface IReceiver {
    country_of_manufacture: string;
    title: string;
    dates_produced: string;
    channels_voices_tracks: any[];
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

export interface Connection {
    connector: string;
    description: string[];
    name: string;
}

export interface Control {
    range: string;
    parameter: string;
    control_type?: string;
}

export interface DisplaysIndicatorsMeter {
    type: string;
    indication: string;
}

export interface ExternalLink {
    url: string;
    notes: string;
}
