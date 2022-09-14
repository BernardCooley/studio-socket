export interface IAmplifierMicrophone {
    country_of_manufacture: string;
    channels_voices_tracks: ChannelsVoicesTrack[];
    title: string;
    model_number: string;
    controls: any[];
    slug: string;
    connections: any[];
    displays_indicators_meters: any[];
    frequency_response: string;
    external_links: any[];
    form_factor: string;
    id: number;
    power_source: string;
    dimensions_string: string;
    signal_path: string;
    manufacturers: string[];
    deviceTypes: string[];
}

export interface ChannelsVoicesTrack {
    type: string;
    additional_information: string;
    quantity: number;
}
