import { t } from "i18next";
import { FC } from 'react'
import IsClient from "./utils/IsClient";
import Button from "@components/react/Button";
import useScreenBreakpoint from "src/react/hooks/useScreenBreakpoint";
import { Download, GitHubIcon, LinkedinIcon, TwitterIcon } from "@components/react/Icons";
import { RESUME_LINK } from "src/constants/links";
import { ABOUT_ROUTE } from "src/constants/routes";

const HeroSection: FC = () => {
	const { isLarge, isExtraLarge } = useScreenBreakpoint()

	const isDesktop = isLarge || isExtraLarge

	const textAboutMe = t('home:hero.CTAs.about-me')
	const subtitle = t('home:hero.subtitle')
	const ctaResume = t('home:hero.CTAs.resume')

	return (
		<section className="relative flex min-h-screen w-full justify-center overflow-visible tracking-[0.3em] md:ml-24 md:mt-8 md:justify-start">

			<section className="z-10">
				<h1 className="relative mt-40 flex flex-col text-center text-[3.7rem] font-bold leading-tight text-brandWhite md:mt-40 lg:mt-52">
					<div className="flex flex-col drop-shadow-md md:flex-row md:gap-4">
						DARWIN
						<div className="flex flex-col items-center">
							<span className="text-[3.3rem] leading-tight md:text-[3.7rem]">
								LOZADA
								<IsClient>
									{!isDesktop && (
										<hr className="h-2 w-full rounded-xl border-0 bg-gradient-to-r from-brandPink to-brandViolet text-transparent drop-shadow-md" />
									)}
								</IsClient>
							</span>
						</div>
					</div>
					{isDesktop && (
						<IsClient>
							<hr className="h-2 w-full rounded-xl border-0 bg-gradient-to-r from-brandPink to-brandViolet text-transparent md:h-[6px]" />
						</IsClient>
					)}
				</h1>
				<p className="mt-4 px-10 text-center text-base font-medium tracking-normal text-brandWhite md:p-0 md:text-left">
					{subtitle}
				</p>
				<div className="mt-10 flex flex-col items-center gap-6 md:mt-6 md:flex-row md:justify-start">
					<Button
						size="medium"
						className="shadow-lg shadow-brandBg/50"
						type="anchor"
						href={ABOUT_ROUTE}
					>
						{textAboutMe}
					</Button>
					<Button
						type="download"
						href={RESUME_LINK}
						className="shadow-lg shadow-brandBg/50"
						size="medium"
						colorScheme="secondary"
						rightIcon={<Download className="w-6 stroke-2 text-brandWhite" />}
					>
						{ctaResume}
					</Button>
				</div>
				<nav className="mt-8 flex w-full justify-center gap-4 md:justify-start">
					<Button
						type="anchor"
						openTab
						size="small"
						className="px-2 shadow-lg shadow-brandBg/50"
						href="https://github.com/DarwinLozada"
					>
						<GitHubIcon className="w-6 fill-white stroke-white stroke-0 text-brandWhite" />
					</Button>

					<Button
						type="anchor"
						openTab
						className="px-2 shadow-lg shadow-brandBg/50"
						size="small"
						href="https://twitter.com/_DarwinLozada_"
					>
						<TwitterIcon className="w-6 fill-white stroke-white stroke-0 text-brandWhite" />
					</Button>
					<Button
						type="anchor"
						openTab
						size="small"
						className="px-2 shadow-lg shadow-brandBg/50"
						href="https://www.linkedin.com/in/darwin-lozada-41443b194/"
					>
						<LinkedinIcon className="w-6 fill-white stroke-white stroke-0 text-brandWhite" />
					</Button>
				</nav>
			</section>
		</section>
	)
}
  
export default HeroSection
  