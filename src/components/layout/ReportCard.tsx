import { Button, Card, CardHeader, CardBody, CardFooter, Image } from '@nextui-org/react'
import { IReport } from '../../common/interfaces/types'
import { Subtitle } from '../common/Subtitle'

export const ReportCard = ({ maker, model, images }: Partial<IReport>) => {
	const subtitle = maker + ' ' + model;
	
	return (
		<Card className="rounded">
			<CardHeader className='flex-col items-start gap-1'>
				<Subtitle>{subtitle}</Subtitle>
			</CardHeader>
			<CardBody className="overflow-visible py-1 px-3">
				<Image alt={images[0].filename} className="object-cover rounded" src={`data:image/jpeg;base64,${images[0].content}`} isBlurred isZoomed radius='none' />
			</CardBody>
			<CardFooter>
				<Button className='w-full bg-lime-500 font-medium rounded'>See report info</Button>
			</CardFooter>
		</Card>
	)
}