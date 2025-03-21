/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { cards } from "@/config/services/Services";
import {
    ButtonExplore,
    CardBox,
    CardContainer,
    DescriptionTypo,
    IconStyle,
    InfoBox,
    MainBannerBox,
    MainHeadTypo,
    ServiceTypo,
    StackBanner,
} from "./Digital.styled";
import Link from "next/link";

const Digital = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <MainBannerBox ref={sectionRef} className={isVisible ? "animate" : ""}>
            <StackBanner>
                <InfoBox>
                    <Box>
                        <ServiceTypo variant="h6">DIGITAL MARKETING SERVICES</ServiceTypo>
                    </Box>
                    <Box>
                        <MainHeadTypo variant="h6">
                            We Provide A Lot of Cool Services
                        </MainHeadTypo>
                    </Box>
                    <Box>
                        <DescriptionTypo variant="body1">
                            Genpixels offers professional digital marketing solutions that are
                            customized for every company, guaranteeing that focused campaigns
                            will maximize engagement and return on investment.
                        </DescriptionTypo>
                    </Box>
                    <Box sx={{ display: "flex", gap: "30px" }}>
                        <Link href="/digitalMarketing">
                            <ButtonExplore>our Services</ButtonExplore>
                        </Link>
                        {/* <Link href="/plans">
                            <ButtonPlan>View Plan</ButtonPlan>
                        </Link> */}
                    </Box>
                </InfoBox>
                <CardBox>
                    <Grid container spacing={3}>
                        {cards.map((card, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ textAlign: "center", p: 1, height: 350 }}>
                                    <CardContainer>
                                        <IconStyle
                                            src={card.icon}
                                            alt="DigitlIcons"
                                            height={30}
                                            width={30}
                                        />
                                        <Typography variant="h6" fontWeight="bold" mt={1}>
                                            {card.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            mt={1}
                                        >
                                            {card.description}
                                        </Typography>
                                    </CardContainer>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </CardBox>
            </StackBanner>
        </MainBannerBox>
    );
};

export default Digital;
