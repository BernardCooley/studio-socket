export interface ICD {
    channels_voices_tracks: any[];
    dates_produced: string;
    connections: any[];
    form_factor: string;
    dimensions_string: string;
    id: number;
    dimensions: Dimension[];
    country_of_manufacture: string;
    title: string;
    model_number: string;
    controls: any[];
    displays_indicators_meters: any[];
    signal_path: string;
    external_references: any[];
    slug: string;
    frequency_response: string;
    power_source: string;
    manufacturers: string[];
    deviceTypes: string[];
}

export interface Dimension {
    width: number;
    depth: number;
    height: number;
}
