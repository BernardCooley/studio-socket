export interface ITurntableSparePart {
    country_of_manufacture: string;
    title: string;
    model_number: string;
    slug: string;
    signal_path: string;
    form_factor: string;
    id: number;
    external_links: ExternalLink[];
    manufacturers: string[];
    deviceTypes: string[];
}

export interface ExternalLink {
    url: string;
    notes: string;
}
