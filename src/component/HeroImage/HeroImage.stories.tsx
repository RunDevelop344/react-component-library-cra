import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    imageUrl: 'https://picsum.photos/1200/600',
    title: 'Welcome to Our Platform',
    subtitle: 'Build beautiful UI components effortlessly',
    buttonText: 'Get Started',
  },
};

export const WithoutButton: Story = {
  args: {
    imageUrl: 'https://picsum.photos/1200/600',
    title: 'Simple Hero Section',
    subtitle: 'No call to action here',
  },
};

export const TallHero: Story = {
  args: {
    imageUrl: 'https://picsum.photos/1200/800',
    title: 'Large Hero',
    subtitle: 'Extra height example',
    height: '600px',
  },
};