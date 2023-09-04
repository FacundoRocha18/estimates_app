import { Button, Card, CardFooter, Image } from '@nextui-org/react'
import { IReport } from '../../common/interfaces/types'
import { Subtitle } from '../common/Subtitle'

interface Props {
	report: IReport;
	isLoaded: boolean;
}

export const ReportCard = ({ report, isLoaded }: Props) => {
	const carName = report.maker + ' ' + report.model;

	return (
		<Card className="rounded" isFooterBlurred>
			<Image alt={report.images[0].filename} className="object-cover rounded-none" src={`data:image/jpeg;base64,${report.images[0].content}`} isBlurred isZoomed removeWrapper radius='none' />
			<CardFooter className="absolute bottom-0 z-20 flex flex-col gap-4 rounded-none" >
				<Subtitle>{carName}</Subtitle>
				<Button className="w-full bg-lime-500 font-medium rounded">See car info</Button>
			</CardFooter>
		</Card>
	)
}