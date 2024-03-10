---
id: 2
title: Testing various tags as a styling playground
author: Lee Presswood
creationDate: 1710106461
description: How to report security issues to the React team.
keywords: security, reporting, issues
---

# Testing various tags as a styling playground

This is an example of an introduction paragraph. I want this to be about 3 or 4 sentences long so as to test line height, text size, and other size parameter as well as looking at how text wraps. This is also located above a header tag so as to see how paragraphs are spaced before headers. The paragraph after the header will show the after-spacing.

## Here is a smaller header

This paragraph shows me how paragraphs appear after a smaller header. I also [want to introduce my first link](https://aws.amazon.com/blogs/devops/import-entire-applications-into-aws-cloudformation/?trk=03fe27f4-e7a4-40a7-b400-9c16dedea48c&sc_channel=el) in this paragraph. This is a link to the AWS dev blog that I'm using partially as inspiration for my own site's styling. Because of this, let's also include our first image:
![Image from the AWS blog](https://d2908q01vomqb2.cloudfront.net/7719a1c782a1ba91c031a682a0a2f8658209adbf/2024/01/11/scan-account.png)

And here's how text after an image appears.

Next, I'd like to have a concept of an "aside" that provides additional text context. I'm imagining these being useful after an image, so let's include another image with an aside afterward.
![Image with an aside](https://d2908q01vomqb2.cloudfront.net/7719a1c782a1ba91c031a682a0a2f8658209adbf/2024/01/11/add-resources-to-template.png)

> Here's where my aside would be.

Let's also try a multi-line aside -- both from wrapping and through including multiple paragraphs.
![Multi-line wrapped aside](https://d2908q01vomqb2.cloudfront.net/7719a1c782a1ba91c031a682a0a2f8658209adbf/2024/01/11/add-related-resources.png)

> At this point, you select Create template and CloudFormation will generate a template from the existing resources. Since you don’t have an existing stack to import these resource into, you must create a new stack. You now select this template and then select the Import to stack button.

And now multi-paragraph:
![Multi-paragraph aside](https://d2908q01vomqb2.cloudfront.net/7719a1c782a1ba91c031a682a0a2f8658209adbf/2024/01/11/change-set.png)

> At this point, the create stack operation will proceed as normal, going through each resource and importing it into the stack. You can report back to your team that you have successfully imported your entire networking stack! As next steps, you should source this template in a version control system. We recently announced a new feature to keep CloudFormation templates synced with popular version control systems. Finally, make sure to make any changes through CloudFormation to avoid a configuration drift between the stated configuration and the existing configuration.
>
> This example was primarily CloudFormation-based, but CDK customers can use CDK Migrate to import this configuration into a CDK application.
