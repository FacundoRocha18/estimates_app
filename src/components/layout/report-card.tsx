import { Badge, Card, CardBody, CardFooter, Divider, Image } from '@nextui-org/react'
import { IReport } from '../../common/interfaces/types'
import { Link } from 'react-router-dom';
import { PriceTag } from '../common/price-tag';
import { Subtitle } from '../common/subtitle';
import { IconDiscount2 } from '@tabler/icons-react';

interface Props {
	report: IReport;
	isLoaded: boolean;
}

export const ReportCard = ({ report }: Props) => {
	const carName = report.maker + ' ' + report.model;
	const monthlyFees = (report.price / 12).toFixed(2);
	const isInDiscount = true;

	return (
		<Badge
			content={<IconDiscount2 size="40" strokeWidth="1.5" />}
			className='p-1'
			size='md'
			color='danger'
			variant='solid'
			placement='top-right'
			disableOutline
			isInvisible={!isInDiscount}
		>
			<Card className="rounded-[4px] shadow-sm hover:shadow-xl">
				<Link to={`/reports/${report.id}`}>
					<CardBody className='p-1 flex items-center justify-center h-[224px] overflow-hidden'>
						<Image alt={report.images[0].filename} removeWrapper className="rounded-none max-h-full" src={`data:image/jpeg;base64,${report.images[0].content}`} radius='none' />
					</CardBody>
					<Divider />
					<CardFooter className="flex flex-col items-start gap-4 rounded-none" >
						<Subtitle>{carName}</Subtitle>
						{
							report.kilometers
								?
								<section>
									<PriceTag>{"$ " + report.price.toString()}</PriceTag>
									<p className='font-normal text-sm'>Año {report.year} - {report.kilometers} Km</p>
									<p className='font-light'>Montevideo - Montevideo</p>
								</section>
								:
								<section>
									<PriceTag>{"$ " + report.price.toString()}</PriceTag>
									<p className='font-light text-sm text-green-500'>12x {monthlyFees} sin interés</p>
									<p className='font-normal text-green-600'>Envío gratis</p>
								</section>
						}
					</CardFooter>
				</Link>
			</Card>
		</Badge>
	)
}