import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Train = () => (
  <Section id="Train">
    <StyledContainer>
      <Subtitle>Train Teach Earn</Subtitle>
      <SectionTitle>Get Fit Fast</SectionTitle>
      <SectionTitle>Earn $$ Fast</SectionTitle>
      <TrainGrid>
        <FeatureItem>
          <FeatureTitle>See results sooner</FeatureTitle>
          <FeatureText>
            Do Exercises the right way taught by a professional.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Save</FeatureTitle>
          <FeatureText>
            Why pay for $50 an hour for a personal trainer that needs a personal trainer?
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Stay accountable</FeatureTitle>
          <FeatureText>
            Build goals and a schedule that you'll stick with.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Build life long habits</FeatureTitle>
          <FeatureText>
            Reevaluate how you view health and fitness with a holistic trainer.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Payments</FeatureTitle>
          <FeatureText>Purchase training sessions and packages with 1 click of a button.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Rewards</FeatureTitle>
          <FeatureText>
            Like being healthy? Get rewarded.
          </FeatureText>
        </FeatureItem>
      </TrainGrid>
    </StyledContainer>
  </Section>
)

export default Train

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const TrainGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
