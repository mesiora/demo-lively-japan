<template>
  <footer>
    <UContainer>
      <div class="flex items-center justify-between py-10 text-xs">
        <div>
          <p class="text-gray-400 dark:text-gray-500">
            &copy; 2024 Medusiora. Published under
            <UTooltip text="See more">
              <ULink
                external
                to="https://github.com/medusiora/demo-discovery-japan"
                target="_blank"
              >
                MIT License.
              </ULink>
            </UTooltip>
          </p>
        </div>
        <div class="flex space-x-4">
          <UTooltip text="medusiora@github">
            <ULink
              external
              to="https://github.com/medusiora"
              title="Github Medusiora"
              target="_blank"
            >
              <UIcon name="i-simple-icons-github" class="h-4 w-4" />
            </ULink>
          </UTooltip>

          <UTooltip text="Mail to: itsarachon.khom@gmail.com">
            <ULink
              external
              to="mailto:itsarachon.khom@gmail.com"
              title="Mail to: itsarachon.khom@gmail.com"
              target="_blank"
            >
              <UIcon name="i-simple-icons-gmail" class="h-4 w-4" />
            </ULink>
          </UTooltip>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
