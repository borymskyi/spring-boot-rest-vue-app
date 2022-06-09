package letscode.sarafan.config;

import io.sentry.spring.EnableSentry;
import org.springframework.context.annotation.Configuration;

// NOTE: Replace the test DSN below with YOUR OWN DSN to see the events from this app in your Sentry
// project/dashboard
@EnableSentry(dsn = "https://97ae35758e704da8b9fda5c6bcb0e28a@o1278824.ingest.sentry.io/6488306")
@Configuration
public class LoggingConfig {
}
