import MainLayout from '@/components/layouts/main-layout'
import PricingPlans from '../../components/section/PricingPlans'

const PackagePlan = () => {
    return (
        <MainLayout>
            <div className="-mt-8">
                <PricingPlans heading='Choose Your Travel Package' description='Flexible car rental options for local rides, airport transfers, and outstation trips across Maharashtra.' />
            </div>
        </MainLayout>
    )
}

export default PackagePlan
