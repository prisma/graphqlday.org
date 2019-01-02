import styled from 'styled-components'

import Container from 'components/Container'
import SectionContent from 'components/SectionContent'
import SectionTitle from 'components/SectionTitle'
import { Grid, GridItem, LogoImage } from 'components/LogoGrid'

const Sponsors = () => (
  <Wrapper>
    <Container>
      <SectionContent style={{ paddingTop: 0, paddingBottom: '2.5rem' }}>
        <SectionTitle>Organized by</SectionTitle>
        <Grid>
          <GridItem>
            <a href="https://www.okgrow.com/">
              <LogoImage
                src="/static/logos/okgrow.png"
                alt="OK GROW!"
                style={{ transform: 'scale(1.07)' }}
              />
            </a>
          </GridItem>
        </Grid>

        <SectionTitle>Community Partners</SectionTitle>
        <Grid>
          <GridItem>
            <a href="https://www.prisma.io/">
              <LogoImage src="/static/logos/prisma.png" alt="Prisma" />
            </a>
          </GridItem>
          <GridItem>
            <a href="https://www.prisma.io/">
              <LogoImage src="/static/logos/github.png" alt="GitHub" />
            </a>
          </GridItem>
        </Grid>
      </SectionContent>
    </Container>
  </Wrapper>
)

export default Sponsors

const Wrapper = styled.section`
  text-align: center;
`