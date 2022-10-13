export interface Welcome8 {
    data: Datum[];
}

export interface Datum {
    id:        number;
    name:      string;
    img:       string;
    height:    number;
    weight:    number;
    abilities: string[];
    moves:     string[];
}
