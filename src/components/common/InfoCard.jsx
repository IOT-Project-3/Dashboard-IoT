import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card.jsx";

function InfoCard({title, data}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{data}</p>
            </CardContent>
        </Card>
    )
}

export default InfoCard;