export interface ITurntableTonearm {
    country_of_manufacture: string;
    external_references: any[];
    channels_voices_tracks: any[];
    dates_produced: string;
    title: string;
    controls: any[];
    slug: string;
    connections: Connection[];
    displays_indicators_meters: any[];
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
    name: string;
    description: string[];
}
