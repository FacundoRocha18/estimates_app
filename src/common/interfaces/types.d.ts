import { UUID } from "crypto";

export interface IReport {
	id: UUID;
	maker: string;
	model: string;
	year: number;
	lng: number;
	lat: number;
	kilometers: number;
	price: number;
	approved: boolean;
	userId: UUID;
	images: Image[];
}

export interface Image {
	id: UUID;
	filename: string;
	content: string;
}

export interface IUser {
	id: UUID;
	email: string | null;
	name: string | null;
	password: string | null;
	admin: boolean;
}

export interface PaginationOptions {
	max: number;
	offset: number;
}