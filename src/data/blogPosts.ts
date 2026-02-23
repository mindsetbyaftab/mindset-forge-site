import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  popular?: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "power-of-positive-thinking",
    title: "The Power of Positive Thinking",
    date: "2026-02-20",
    category: "Mindset",
    image: blog1,
    description: "Discover how positive thinking can transform your life and unlock your true potential.",
    popular: true,
    content: `Positive thinking is more than just a feel-good philosophy — it's a powerful tool that can reshape your reality. When you train your mind to focus on possibilities instead of limitations, you begin to see opportunities where others see obstacles.

## Why Positive Thinking Matters

Research has shown that optimistic people tend to live longer, have stronger immune systems, and achieve more in their careers. But positive thinking isn't about ignoring reality — it's about approaching challenges with a constructive mindset.

## How to Cultivate Positive Thinking

### 1. Start Your Day with Gratitude
Before reaching for your phone, take a moment to think of three things you're grateful for. This simple practice rewires your brain to notice the good in your life.

### 2. Reframe Negative Thoughts
When a negative thought arises, challenge it. Ask yourself: "Is this really true? What's another way to look at this situation?"

### 3. Surround Yourself with Positivity
The people you spend time with influence your mindset. Choose to be around those who uplift and inspire you.

### 4. Practice Affirmations
Repeating positive statements about yourself can gradually shift your self-image and confidence level.

## The Science Behind It

Neuroscience has shown that our thoughts physically change the structure of our brains. This concept, known as neuroplasticity, means that we can literally rewire our brains for positivity through consistent practice.

## Conclusion

Positive thinking is a skill that can be developed with practice. Start small, be patient with yourself, and watch as your world begins to transform.`,
  },
  {
    slug: "morning-routine-for-success",
    title: "5 Morning Routines That Drive Success",
    date: "2026-02-18",
    category: "Productivity",
    image: blog2,
    description: "Learn the morning habits of highly successful people and how to implement them.",
    popular: true,
    content: `The way you start your morning sets the tone for your entire day. Successful people understand this — and they've designed their mornings accordingly.

## 1. Wake Up Early

Most successful leaders wake up before 6 AM. This quiet time before the world wakes up is invaluable for focused thinking and planning.

## 2. Exercise First

Physical movement increases blood flow to the brain, boosts endorphins, and sets a positive tone for the day. Even 20 minutes of exercise can make a significant difference.

## 3. Meditate and Reflect

Taking 10-15 minutes to meditate clears mental clutter and improves focus. Many top performers credit meditation as their secret weapon.

## 4. Plan Your Day

Review your goals and priorities before diving into work. Identify your top 3 tasks and tackle them first when your energy is highest.

## 5. Feed Your Mind

Spend time reading, listening to podcasts, or learning something new. Continuous learning is a hallmark of successful people.

## Implementing Your Routine

Start with just one of these habits and build from there. Consistency matters more than perfection. Within 30 days, you'll notice a dramatic shift in your productivity and mindset.`,
  },
  {
    slug: "overcoming-fear-of-failure",
    title: "How to Overcome the Fear of Failure",
    date: "2026-02-15",
    category: "Mindset",
    image: blog3,
    description: "Fear of failure holds many people back. Learn strategies to push through and take action.",
    popular: true,
    content: `Fear of failure is one of the most common barriers to success. It keeps us stuck in our comfort zones, preventing us from reaching our full potential.

## Understanding the Fear

Fear of failure often stems from childhood experiences, societal pressure, or past setbacks. It manifests as procrastination, perfectionism, or avoiding challenges altogether.

## Reframing Failure

The most successful people in history have failed repeatedly. Thomas Edison failed thousands of times before inventing the light bulb. J.K. Rowling was rejected by 12 publishers. What sets them apart? They viewed failure as feedback.

## Strategies to Overcome Fear

### Start Small
Begin with low-stakes challenges. Each small win builds confidence and reduces fear.

### Visualize Success
Spend time imagining positive outcomes. Your brain can't distinguish between vivid imagination and reality, so visualization trains your nervous system for success.

### Accept Imperfection
Perfectionism is fear disguised as high standards. Give yourself permission to be imperfect.

### Take Action Despite Fear
Courage isn't the absence of fear — it's taking action despite it. The more you do this, the weaker fear becomes.

## Moving Forward

Remember: the biggest failure is never trying at all. Every step forward, no matter how small, is progress.`,
  },
  {
    slug: "building-daily-habits",
    title: "Building Habits That Stick",
    date: "2026-02-12",
    category: "Habits",
    image: blog4,
    description: "The science of habit formation and practical tips to build lasting positive habits.",
    content: `Habits are the compound interest of self-improvement. Small daily actions, repeated consistently, lead to remarkable results over time.

## The Habit Loop

Every habit follows a simple pattern: Cue → Routine → Reward. Understanding this loop is key to building new habits and breaking bad ones.

## The 1% Rule

Improving by just 1% each day leads to being 37 times better by the end of the year. Don't underestimate the power of small, consistent improvements.

## Practical Tips

### Stack Your Habits
Attach new habits to existing ones. "After I pour my morning coffee, I will meditate for 5 minutes."

### Make It Easy
Reduce friction for good habits and increase friction for bad ones. Want to read more? Keep a book on your pillow.

### Track Your Progress
Use a simple habit tracker. Seeing your streak grow is incredibly motivating.

### Don't Break the Chain
Consistency is more important than intensity. It's better to do something small every day than to do something big occasionally.

## The Two-Day Rule

Never miss two days in a row. One missed day is human. Two missed days is the start of a new habit — a bad one.`,
  },
  {
    slug: "power-of-reading",
    title: "Why Reading Changes Everything",
    date: "2026-02-10",
    category: "Self-Improvement",
    image: blog5,
    description: "How reading can accelerate your personal growth and expand your perspective.",
    content: `Reading is the most efficient way to download someone else's lifetime of experience into your mind. In a few hours, you can absorb decades of wisdom.

## The Reading Habit of Successful People

Warren Buffett reads 500 pages a day. Bill Gates reads 50 books a year. Elon Musk credits books for teaching him rocket science. The pattern is clear.

## Benefits of Reading

### Mental Stimulation
Reading keeps your brain active and engaged, reducing cognitive decline as you age.

### Stress Reduction
Getting lost in a good book can reduce stress by up to 68%, according to research.

### Knowledge Accumulation
Every book you read adds to your mental toolkit, giving you more resources to draw from in decision-making.

### Improved Focus
In an age of distraction, reading trains your brain to focus on one thing for extended periods.

## How to Read More

- Set a daily reading goal (even 20 pages)
- Always carry a book
- Replace social media time with reading
- Join a book club for accountability
- Mix genres to keep things interesting

## Getting Started

If you're not a regular reader, start with topics that genuinely interest you. The goal isn't to read impressive books — it's to build the habit of reading consistently.`,
  },
  {
    slug: "mindfulness-for-beginners",
    title: "A Beginner's Guide to Mindfulness",
    date: "2026-02-08",
    category: "Mindfulness",
    image: blog6,
    description: "Start your mindfulness journey with these simple and practical techniques.",
    content: `Mindfulness is the practice of being fully present in the moment. In our fast-paced world, it's become an essential skill for mental health and productivity.

## What is Mindfulness?

Mindfulness means paying attention to the present moment without judgment. It's about observing your thoughts and feelings without getting caught up in them.

## Benefits

- Reduced stress and anxiety
- Improved focus and concentration
- Better emotional regulation
- Enhanced creativity
- Improved relationships

## Simple Practices

### Breathing Meditation
Sit quietly and focus on your breath. When your mind wanders, gently bring it back. Start with 5 minutes and gradually increase.

### Body Scan
Lie down and slowly bring awareness to each part of your body, from toes to head. Notice sensations without trying to change them.

### Mindful Walking
Walk slowly, paying attention to each step. Feel your feet touching the ground, notice the air on your skin.

### Mindful Eating
Eat a meal without distractions. Notice the colors, textures, and flavors of your food.

## Making It a Habit

The key to mindfulness is consistency, not duration. Five minutes of daily practice is more beneficial than an hour once a week.`,
  },
];

export const categories = [...new Set(blogPosts.map((p) => p.category))];
