"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";

export default function Promotions() {
    const [activeTab, setActiveTab] = useState("offers");

    const offers = [
        {
            id: 1,
            title: "Buy One, Get One Free",
            description:
                "Buy any regular sub and get another of equal or lesser value for free!",
            expiryDate: "April 15, 2025",
            image: "/deal1.jpg",
            code: "BOGOSUB25",
        },
        {
            id: 2,
            title: "Family Meal Deal",
            description:
                "4 regular subs, 4 chips, and 4 fountain drinks for only $29.99!",
            expiryDate: "May 1, 2025",
            image: "/deal4.jpg",
            code: "FAMILY4",
        },
        {
            id: 3,
            title: "Free Cookie Fridays",
            description:
                "Get a free chocolate chip cookie with any purchase every Friday!",
            expiryDate: "Ongoing - Fridays only",
            image: "/deal3.jpg",
            code: "FRIDAYCOOKIE",
        },
    ];

    const news = [
        {
            id: 1,
            title: "New Spicy Italian Sub Launches Next Week",
            date: "March 5, 2025",
            content:
                "We're excited to announce our new Spicy Italian sub featuring premium pepperoni, salami, and our signature spicy aioli sauce.",
            image: "/deal2.jpg",
        },
        {
            id: 2,
            title: "Quiznos Partners with Local Farms for Fresh Ingredients",
            date: "February 20, 2025",
            content:
                "We're proud to announce our new partnership with local farms to provide even fresher vegetables and herbs for all our locations.",
            image: "/deal5.png",
        },
        {
            id: 3,
            title: "Mobile App Gets Major Update",
            date: "January 15, 2025",
            content:
                "Our mobile app has been completely redesigned with a faster ordering process and new reward tiers for our loyal customers.",
            image: "/deal6.png",
        },
    ];

    const coupons = [
        {
            id: 1,
            title: "$5 Off Any Large Sub",
            code: "LARGE5OFF",
            expiryDate: "April 30, 2025",
            terms: "Valid for one-time use on any large sub. Cannot be combined with other offers.",
        },
        {
            id: 2,
            title: "Free Chips & Drink with Any Regular Sub",
            code: "FREESIDE",
            expiryDate: "March 31, 2025",
            terms: "Valid for one regular fountain drink and one regular chips with purchase of any regular sub.",
        },
        {
            id: 3,
            title: "20% Off Catering Orders",
            code: "CATER20",
            expiryDate: "May 15, 2025",
            terms: "Valid on catering orders of $100 or more. Must be placed at least 24 hours in advance.",
        },
        {
            id: 4,
            title: "$10 Off Orders of $25+",
            code: "SAVE10NOW",
            expiryDate: "April 1, 2025",
            terms: "Valid on orders totaling $25 or more before tax. Limited to one use per customer.",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-3">
            <h1 className="text-3xl font-bold text-center mb-8">
                Promotions & Deals
            </h1>

            <Tabs
                defaultValue="offers"
                onValueChange={setActiveTab}
                className="w-full"
            >
                <TabsList className="w-full grid grid-cols-3 mb-8">
                    <TabsTrigger value="offers">Special Offers</TabsTrigger>
                    <TabsTrigger value="news">Quiznos News</TabsTrigger>
                    <TabsTrigger value="coupons">Coupons</TabsTrigger>
                </TabsList>

                <TabsContent value="offers" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {offers.map((offer) => (
                            <Card key={offer.id} className="overflow-hidden">
                                <div className="h-48 relative">
                                    <Image
                                        src={offer.image}
                                        alt={offer.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle>{offer.title}</CardTitle>
                                    <CardDescription>
                                        Valid until: {offer.expiryDate}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{offer.description}</p>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <div className="font-mono bg-gray-100 px-3 py-1 rounded">
                                        {offer.code}
                                    </div>
                                    <Button className="bg-[#E85D0C]">
                                        Redeem Now
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="news" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {news.map((item) => (
                            <Card
                                key={item.id}
                                className="flex flex-col md:flex-row overflow-hidden"
                            >
                                <div className="w-full md:w-1/3 h-48 md:h-auto relative bg-gray-200 flex items-center justify-center">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <CardHeader>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardDescription>
                                            {item.date}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{item.content}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="bg-[#E85D0C]">
                                            Read More
                                        </Button>
                                    </CardFooter>
                                </div>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="coupons" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {coupons.map((coupon) => (
                            <Card key={coupon.id} className="border-dashed">
                                <CardHeader className="border-b border-dashed border-gray-200">
                                    <CardTitle>{coupon.title}</CardTitle>
                                    <CardDescription>
                                        Valid until: {coupon.expiryDate}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-sm text-gray-500">
                                            Coupon Code:
                                        </span>
                                        <span className="font-mono font-bold text-lg">
                                            {coupon.code}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        {coupon.terms}
                                    </p>
                                </CardContent>
                                <CardFooter className="flex justify-end">
                                    <Button className="bg-[#E85D0C]">
                                        Use Code
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
